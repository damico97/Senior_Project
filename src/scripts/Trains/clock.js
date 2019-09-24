/**
 * @file ctc_clock.js
 * @author Joey Damico
 * @date September 25, 2019
 * @brief CTC Controller Class for a Clock for the trains
 */


/**
 * CLASS Clock
 * @brief Class that keeps track of the time since the start of the application
 * 
 * @details This class is used to keep track and calculate how much time has passed since the launch
 * of the program, it is used to keep the trains moving at the correct times
 * 
 * MEMBER VARIABLES
 * start_time -> The the games was started
 */
class Clock {
    /**
     * constructor()
     * @brief The constructor for the Clock class
     * 
     * @details This will initialize all the member variables when the program is started
     */
    constructor() {
        this.start_time;
    }
    // ---- END constructor() ----

    /**
     * startClock()
     * @brief Intialize the start time variable 
     */
    startClock() {
        this.start_time = new Date().getTime() / 1000;
    }
    // ---- END startClock() ----

    /**
     * getTimeFromStart()
     * @brief Calculated how long it's been since the start of the program in seconds
     * 
     * @returns The number of seconds since the program was started
     */
    getTimeFromStart = () => {
        var current_time = new Date().getTime() / 1000;
        var diff = current_time - this.start_time;

        return diff;
    }
    // ---- END getTimeFromStart() ----
}

// This is required when using ReactJS
export default Clock;