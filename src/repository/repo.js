let Repo = (function () {

    // Instance stores a reference to the Singleton
    let instance;

    function init() {

        // Singleton

        // Private methods and variables
        function privateMethod() {
            return fetch('./datafile.json').then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
        }

        return {
            data: privateMethod
        };

    }

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {

            if (!instance) {
                instance = init();
            }

            return instance;
        }



    };

})();