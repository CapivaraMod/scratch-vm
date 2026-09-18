const Cast = require('../util/cast');

const cache = {};

class Scratch3WikipediaBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;

        /**
         * Current Wikipedia language code.
         * @type {string}
         */
        this._language = 'en';
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
    getPrimitives () {
        return {
            wikipedia_set_language: this.setLanguage,
            wikipedia_page_exists: this.pageExists,
            wikipedia_summary: this.summary,
            wikipedia_description: this.description,
            wikipedia_title: this.title,
            wikipedia_image: this.image,
            wikipedia_link: this.link,
            wikipedia_clear_cache: this.clearCache
        };
    }

    async _fetchPage (term, language) {
        const key = `${language}:${Cast.toString(term).toLowerCase().trim()}`;
        if (Object.prototype.hasOwnProperty.call(cache, key)) {
            return cache[key];
        }

        const url = `https://${language}.wikipedia.org/api/rest_v1/page/summary/` +
            encodeURIComponent(Cast.toString(term).trim());

        try {
            const response = await fetch(url, {
                headers: {Accept: 'application/json'}
            });

            if (!response.ok) {
                cache[key] = null;
                return null;
            }

            const data = await response.json();

            if (data.type === 'disambiguation') {
                cache[key] = {error: 'ambiguous'};
                return cache[key];
            }

            const result = {
                title: data.title || term,
                summary: data.extract || '',
                description: data.description || '',
                image: data.thumbnail ? data.thumbnail.source : '',
                imageLarge: data.originalimage ? data.originalimage.source : '',
                url: (data.content_urls && data.content_urls.desktop) ?
                    data.content_urls.desktop.page : ''
            };

            cache[key] = result;
            return result;
        } catch (e) {
            cache[key] = null;
            return null;
        }
    }

    setLanguage (args) {
        this._language = Cast.toString(args.LANGUAGE);
    }

    async pageExists (args) {
        const data = await this._fetchPage(args.TERM, this._language);
        return data !== null && !data.error;
    }

    async summary (args) {
        const data = await this._fetchPage(args.TERM, this._language);
        if (!data) return 'Not found';
        if (data.error === 'ambiguous') return 'Ambiguous term, be more specific';
        return data.summary || 'No summary available';
    }

    async description (args) {
        const data = await this._fetchPage(args.TERM, this._language);
        if (!data) return 'Not found';
        if (data.error === 'ambiguous') return 'Ambiguous term, be more specific';
        return data.description || 'No description available';
    }

    async title (args) {
        const data = await this._fetchPage(args.TERM, this._language);
        if (!data) return 'Not found';
        if (data.error === 'ambiguous') return 'Ambiguous term, be more specific';
        return data.title;
    }

    async image (args) {
        const data = await this._fetchPage(args.TERM, this._language);
        if (!data || data.error) return '';
        return data.imageLarge || data.image || '';
    }

    async link (args) {
        const data = await this._fetchPage(args.TERM, this._language);
        if (!data || data.error) return '';
        return data.url || '';
    }

    clearCache () {
        for (const key in cache) delete cache[key];
    }
}

module.exports = Scratch3WikipediaBlocks;