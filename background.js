var camera, scene, sceneCSS, renderer, rendererCSS, geometry, material, mesh, cube;

init();
animate();

var cursorX = 100;
var cursorY = 100;

document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}

function init() {

    scene = new THREE.Scene();
    sceneCSS = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 500;
    scene.add(camera);

    /*
    var number = document.createElement( 'div' );
    number.className = 'content';
    number.innerHTML = $('#content_placebo')[0].innerHTML;
    //number.innerHTML = "THREE.JS";
    $('#content_placebo')[0].innerHTML = "";

    object = new THREE.CSS3DObject( number );

    sceneCSS.add(object);
    */

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xffffff );
    //renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    $('#background')[0].appendChild( renderer.domElement );

    /*
    rendererCSS = new THREE.CSS3DRenderer();
    renderer.setClearColor( 0xf0f0f0 );
    rendererCSS.setSize( window.innerWidth, window.innerHeight );
    rendererCSS.domElement.style.position = 'absolute';
    rendererCSS.domElement.style.top = 0;
    document.body.appendChild( rendererCSS.domElement );
    */

    cube = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), new THREE.MeshNormalMaterial() );
    
    scene.add(cube)

}

function animate() {
    cube.rotation.x = cursorX/1000;
    cube.rotation.y = cursorY/1000;
    
    render();
    requestAnimationFrame(animate);

}

function render() {
    renderer.render(scene, camera);
    //rendererCSS.render(sceneCSS, camera);
}