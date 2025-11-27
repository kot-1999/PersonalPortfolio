import cssPlugin from '@eslint/css'
import js from '@eslint/js'
import htmlPlugin from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import { defineConfig } from 'eslint/config'
import eslintImport from 'eslint-plugin-import'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default defineConfig([
    // CSS config
    {
        files: ['**/*.css'],
        plugins: {
            css: cssPlugin
        },
        extends: [
            cssPlugin.configs.recommended
        ],
        language: 'css/css',
        rules: {
            'css/no-duplicate-imports': 'error',
            'css/no-empty-blocks': 'error',
            'css/no-invalid-at-rules': 'error',
            'css/no-invalid-properties': 'error'
        }
    },

    // HTML config
    {
        files: ['**/*.html'],
        plugins: {
            prettier: eslintPluginPrettier,
            '@html-eslint': htmlPlugin
        },
        extends: [
            htmlPlugin.configs.recommended
        ],

        language: 'html/html',
        languageOptions: {
            // This tells the parser to treat {{ ... }} as template syntax,
            // so it won’t try to parse contents inside as regular HTML
            templateEngineSyntax: {

                '{{': '}}'
            },
            parser: htmlParser
        },

        rules: {
            '@html-eslint/indent': ['error', 4],
            'html/no-duplicate-id': 'error',
            'html/no-duplicate-in-head': 'error',
            'html/no-ineffective-attrs': 'error',
            'html/no-inline-styles': 'error',
            'html/prefer-https': 'warn',
            'html/require-closing-tags': 'error',
            'html/require-img-alt': 'error',
            'html/require-doctype': 'error',
            'html/require-li-container': 'error',
            'html/require-meta-charset': 'error',
            'html/require-lang': 'error',
            'html/no-empty-headings': 'error',
            'html/no-heading-inside-button': 'error',
            'html/no-multiple-empty-lines': 'error',
            'html/quotes': ['error', 'single'],
            'html/sort-attrs': 'error'
        }
    },

    // JS, MJS, CJS config
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: {
            js,
            prettier: eslintPluginPrettier,
            import: eslintImport
        },
        extends: ['js/recommended'],
        languageOptions: {
            globals: {
                ...globals.browser,
                '$': 'readonly'
            }
        },
        rules: {
            'object-curly-newline': [
                'error',
                {
                    'ObjectExpression': {
                        'multiline': true,
                        'consistent': true
                    },
                    'ObjectPattern': {
                        'multiline': true,
                        'consistent': true
                    },
                    'ImportDeclaration': {
                        'multiline': true,
                        'consistent': true
                    },
                    'ExportDeclaration': {
                        'multiline': true,
                        'consistent': true
                    }
                }
            ],
            'arrow-parens': ['error', 'always'],
            'object-property-newline': [
                'error',
                { 'allowAllPropertiesOnSameLine': false }
            ],
            'operator-linebreak': ['error', 'before'],
            'function-paren-newline': ['error', 'multiline'],
            'indent': ['error', 4],
            'wrap-iife': ['error', 'inside'],
            'quotes': ['error', 'single', { 'avoidEscape': true }],
            'max-len': ['error', {
                'code': 120,
                'ignoreComments': false, // Ignore long comments
                'ignoreUrls': false, // Ignore long URLs
                'ignoreStrings': true, // Ignore strings in the line length calculation
                'ignoreTemplateLiterals': false, // Ignore template literals
                'ignoreRegExpLiterals': false
            }],
            'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
            curly: ['error', 'all'],
            'no-console': 'error',
            eqeqeq: ['error', 'always'],
            'no-var': 'error',
            'key-spacing': ['error', {
                'beforeColon': false,
                'afterColon': true
            }],
            'object-curly-spacing': ['error', 'always'],
            'no-extra-semi': 'error',
            'comma-dangle': ['error', 'never'],
            'prefer-const': 'error',
            'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
            'no-duplicate-imports': 'error',
            'import/no-cycle': 'error',
            'no-multiple-empty-lines': ['error', {
                'max': 1,
                'maxEOF': 0,
                'maxBOF': 0
            }],
            'import/order': [
                'error',
                {
                    'alphabetize': {
                        'order': 'asc',
                        'caseInsensitive': true
                    },
                    'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
                    'newlines-between': 'always'
                }
            ],
            'import/newline-after-import': 'error'
        }
    }

]);
