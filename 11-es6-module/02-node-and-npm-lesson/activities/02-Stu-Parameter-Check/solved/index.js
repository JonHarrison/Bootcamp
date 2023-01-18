(function compareArguments() {

    //console.log(process.argv);

    // argv
    // 0 : node
    // 1 : index.js
    // 2 : first argument
    // 3 : second argument

    if (process.argv.length < 4) {
        console.log("Please supply two arguments");
        return;
    }

    const arg1 = process.argv[2];
    const arg2 = process.argv[3];
    console.log(`Are the supplied arguments (${arg1} and ${arg2}) the same ? ${arg1 === arg2 ? 'true' : 'false'}`);

})();
