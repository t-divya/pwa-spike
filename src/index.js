if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js").then(registration => {
            console.log("sw registered");
            console.log(registration);
        }).catch(error => {
            console.log("sw registration failed");
            console.log("error");

        })
    })

}

