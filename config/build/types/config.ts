
export type BuildMode = 'production' | 'development'

export interface BuilPaths {
    entry: string;
    build: string;
    html: string;
    src: string

}


export interface BuildOptions {
    mode: BuildMode;
    paths?: BuilPaths;
    isDev?: boolean
    port: number
}  

export interface BuildEnv {
    mode: BuildMode
    port: number
}


