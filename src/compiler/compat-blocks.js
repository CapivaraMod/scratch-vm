// @ts-check

/**
 * @fileoverview List of blocks to be supported in the compiler compatibility layer.
 * This is only for native blocks. Extensions should not be listed here.
 */

// Please keep these lists alphabetical.

const stacked = [
    'looks_changestretchby',
    'looks_hideallsprites',
    'looks_sayforsecs',
    'looks_setstretchto',
    'looks_switchbackdroptoandwait',
    'looks_thinkforsecs',
    'motion_align_scene',
    'motion_glidesecstoxy',
    'motion_glideto',
    'motion_goto',
    'motion_pointtowards',
    'motion_scroll_right',
    'motion_scroll_up',
    'sensing_askandwait',
    'sensing_setdragmode',
    'sound_changeeffectby',
    'sound_changevolumeby',
    'sound_cleareffects',
    'sound_play',
    'sound_playuntildone',
    'sound_seteffectto',
    'sound_setvolumeto',
    'sound_stopallsounds',
    'wikipedia_clear_cache',
    'wikipedia_set_language'
];

const inputs = [
    'motion_xscroll',
    'motion_yscroll',
    'sensing_loud',
    'sensing_loudness',
    'sensing_online',
    'sensing_userid',
    'sound_volume',
    'wikipedia_description',
    'wikipedia_image',
    'wikipedia_link',
    'wikipedia_page_exists',
    'wikipedia_summary',
    'wikipedia_title'
];

module.exports = {
    stacked,
    inputs
};