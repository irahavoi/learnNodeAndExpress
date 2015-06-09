/**
 * Created by irahavoi on 6/9/2015.
 */
console.log('Initializing My Module...');
function MyModule(){
    return {
        greet: function(name){
            return "Hello, my new master " + name + ", I'm happy to serve you.";
        }
    }
}

module.exports = MyModule;
console.log('Initialization complete.');