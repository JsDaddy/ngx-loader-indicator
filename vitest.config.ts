import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test.ts'],
        include: ['**/*.spec.ts'],
        exclude: [
            'node_modules/**',
            'dist/**',
            '**/*.d.ts',
            'src/test.ts',
            'projects/ngx-loader-indicator-lib/src/test.ts',
        ],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/**',
                'dist/**',
                '**/*.spec.ts',
                'src/test.ts',
                'src/main.ts',
                'projects/ngx-loader-indicator-lib/src/test.ts',
                '**/*.config.*',
                '**/*.d.ts',
                '**/index.ts',
                '**/public-api.ts',
            ],
            include: ['src/**/*.ts', 'projects/ngx-loader-indicator-lib/src/**/*.ts'],
        },
    },
    resolve: {
        alias: {
            'ngx-loader-indicator': resolve(
                __dirname,
                './projects/ngx-loader-indicator-lib/src/public-api'
            ),
        },
    },
});
