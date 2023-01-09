
window.onload = () => {
    var images = ["https://www.nationalgeographic.com.es/medio/2021/08/11/varias-especies-de-dinosaurios_41d76392_1200x630.jpg",
        "https://i.blogs.es/4d49d6/dino/450_1000.webp",
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/06/jurassic_world_dominion_colin_trevorrow.jpg?resize=1200%2C900&quality=60&strip=all&ssl=1",
        "https://imagenes.elpais.com/resizer/8e7L1z4QLBDFqRsEy8kdJ5hlu1g=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/NIJSSRWS4RE57D4OLMCWU43WLY.jpg",
        "https://www.elindependiente.com/wp-content/uploads/2022/02/matge20120bditosaurus-980x550.jpg"];

    let ant = document.getElementById("ant");
    let sig = document.getElementById("sig");

    ant.addEventListener("click", anterior);
    sig.addEventListener("click", siguiente);

    function anterior(e) {
        let img = document.getElementById("img");
        let indice;
        for (let i = 0; i < images.length; i++) {
            if (img.src == images[i]) {
                if (i > 0) {
                    indice = i;
                } else {
                    indice = images.length;
                }
            }
        }
        img.src = images[indice - 1];
    }

    function siguiente(e) {
        let img = document.getElementById("img");
        let indice;
        for (let i = 0; i < images.length; i++) {
            if (img.src == images[i]) {
                if (i + 1 < images.length) {
                    indice = i;
                } else {
                    indice = 0;
                }
            }
        }

        img.src = images[indice + 1];
    }

    function findImage() {
        for (let i = 0; i < images.length; i++) {
            if (img.src == images[i]) {
                if (i + 1 < images.length && i > 0) {
                    return i;
                } else {
                    if (i == 0) {
                        return images.length;
                    } else {
                        return 0;
                    }
                }
            }
        }
    }
}