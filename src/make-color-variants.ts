import { darken, lighten } from 'polished';

type ColorVariantKeysNumbers =
  | 25
  | 50
  | 75
  | 100
  | 125
  | 150
  | 175
  | 200
  | 225
  | 250
  | 275
  | 300
  | 325
  | 350
  | 375
  | 400
  | 425
  | 450
  | 475
  | 500
  | 525
  | 550
  | 575
  | 600
  | 625
  | 650
  | 675
  | 700
  | 725
  | 750
  | 775
  | 800
  | 825
  | 850
  | 875
  | 900
  | 925
  | 950
  | 975;

export type ColorVariantKeys =
  | 'default'
  | `${ColorVariantKeysNumbers}`
  | `-${ColorVariantKeysNumbers}`;

export type ColorVariants = Record<ColorVariantKeys, string>;

export function makeColorVariants(color: string): ColorVariants {
  return {
    'default': color,
    '25': lighten(0.975, color),
    '50': lighten(0.95, color),
    '75': lighten(0.925, color),
    '100': lighten(0.9, color),
    '125': lighten(0.875, color),
    '150': lighten(0.85, color),
    '175': lighten(0.825, color),
    '200': lighten(0.8, color),
    '225': lighten(0.775, color),
    '250': lighten(0.75, color),
    '275': lighten(0.725, color),
    '300': lighten(0.7, color),
    '325': lighten(0.675, color),
    '350': lighten(0.65, color),
    '375': lighten(0.625, color),
    '400': lighten(0.6, color),
    '425': lighten(0.575, color),
    '450': lighten(0.55, color),
    '475': lighten(0.525, color),
    '500': lighten(0.5, color),
    '525': lighten(0.475, color),
    '550': lighten(0.45, color),
    '575': lighten(0.425, color),
    '600': lighten(0.4, color),
    '625': lighten(0.375, color),
    '650': lighten(0.35, color),
    '675': lighten(0.325, color),
    '700': lighten(0.3, color),
    '725': lighten(0.275, color),
    '750': lighten(0.25, color),
    '775': lighten(0.225, color),
    '800': lighten(0.2, color),
    '825': lighten(0.175, color),
    '850': lighten(0.15, color),
    '875': lighten(0.125, color),
    '900': lighten(0.1, color),
    '925': lighten(0.075, color),
    '950': lighten(0.05, color),
    '975': lighten(0.025, color),

    '-25': darken(0.025, color),
    '-50': darken(0.05, color),
    '-75': darken(0.075, color),
    '-100': darken(0.1, color),
    '-125': darken(0.125, color),
    '-150': darken(0.15, color),
    '-175': darken(0.175, color),
    '-200': darken(0.2, color),
    '-225': darken(0.225, color),
    '-250': darken(0.25, color),
    '-275': darken(0.275, color),
    '-300': darken(0.3, color),
    '-325': darken(0.325, color),
    '-350': darken(0.35, color),
    '-375': darken(0.375, color),
    '-400': darken(0.4, color),
    '-425': darken(0.425, color),
    '-450': darken(0.45, color),
    '-475': darken(0.475, color),
    '-500': darken(0.5, color),
    '-525': darken(0.525, color),
    '-550': darken(0.55, color),
    '-575': darken(0.575, color),
    '-600': darken(0.6, color),
    '-625': darken(0.625, color),
    '-650': darken(0.65, color),
    '-675': darken(0.675, color),
    '-700': darken(0.7, color),
    '-725': darken(0.725, color),
    '-750': darken(0.75, color),
    '-775': darken(0.775, color),
    '-800': darken(0.8, color),
    '-825': darken(0.825, color),
    '-850': darken(0.85, color),
    '-875': darken(0.875, color),
    '-900': darken(0.9, color),
    '-925': darken(0.925, color),
    '-950': darken(0.95, color),
    '-975': darken(0.975, color),
  };
}
