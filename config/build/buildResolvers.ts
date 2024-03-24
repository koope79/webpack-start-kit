import webpack, { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers (options: BuildOptions):ResolveOptions  {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],   // перечень директорий для которых настраиваются абсолютные пути
        mainFiles: ['index'],   // для каждого модуля главным файлом является index
        alias: {}
    };
};