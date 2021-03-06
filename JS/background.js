let scene, camera, renderer, stars, starGeo;

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.setClearColor(0xffffff, 1);

    starGeo = new THREE.Geometry();
    for (let i = 0; i < 5000; i++) {
        star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.001;
        starGeo.vertices.push(star);
    }

    starGeo2 = new THREE.Geometry();
    for (let i = 0; i < 7000; i++) {
        star2 = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        star2.velocity = 0;
        star2.acceleration = 0.002;
        starGeo2.vertices.push(star2);
    }

    let sprite = new THREE.TextureLoader().load('../i/star2.png');
    let sprite2 = new THREE.TextureLoader().load('../i/star3.png');

    let starMaterial = new THREE.PointsMaterial({
        size: 0.5,
        map: sprite
    });

    let starMaterial2 = new THREE.PointsMaterial({
        size: 0.7,
        map: sprite2
    });

    stars = new THREE.Points(starGeo, starMaterial);
    stars2 = new THREE.Points(starGeo2, starMaterial2);
    scene.add(stars, stars2);

    window.addEventListener("resize", onWindowResize, false);

    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;

        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y += 0.002;

    starGeo2.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;

        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    starGeo2.verticesNeedUpdate = true;
    stars2.rotation.y += 0.002;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();
