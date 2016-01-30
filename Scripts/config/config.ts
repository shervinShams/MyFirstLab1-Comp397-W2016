module config {

    // State Constants
    export const MENU_STATE: number = 0;
    export const PLAY_STATE: number = 1;
    export const OVER_STATE: number = 2;
    
    // screen constants
    
    export class Screen {
        public static Width:number = 640;
        public static Hight:number = 480;
        public static Center_x:number = 320;
        public static Center_y:number = 240;
    }
    
    // game constants
    
    export class Game {
        
        public static FTP:number = 60;
    }
    
}