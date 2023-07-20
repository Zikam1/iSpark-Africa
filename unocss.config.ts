import { prependListener } from 'process'
import { 
    defineConfig,
    presetAttributify,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
 } from 'unocss'

 export default defineConfig({
    shortcuts: [
        ['w-site', 'wfull '],
    ],

    theme: {
        
    },

    presets: [
        presetUno(),
        presetAttributify(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                poppins: [
                    {
                        name: 'Poppins',
                        weights: ['300', '400', '500', '600', '700']
                    },
                    {
                        name: 'sans-serif',
                        provider: 'none'
                    }
                ]
            }
        })
    ],

    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ]
 })

 