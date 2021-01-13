let container;
let camera;
let renderer;
let scene;
let item;

function init(){
    container = document.querySelector('.scene');
    
//Create scene
    scene = new THREE.Scene();
    
    const fov = 35; //camera angle
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 00; //clipping looking small far away
    
//camera setup    
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far) //other is orthographic camera for a 2D look and flattening
    
    camera.position.set(0,0,50);

//add light
    const ambient = new THREE.AmbientLight(0x404040, 4);
    scene.add(ambient);
    
//renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    container.appendChild(renderer.domElement);
    
    
//load model
    let loader = new THREE.GLTFLoader();
    loader.load('./img/stack.gltf', function(gltf){
        scene.add(gltf.scene);
        item = gltf.scene.children[0];
        animate();
    });
}

function animate(){
    requestAnimationFrame(animate);
    house.rotation.z += 0.005;
    renderer.render(scene, camera);
}

init();