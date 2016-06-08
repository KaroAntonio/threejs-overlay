var cameraI, sceneI, rendererI, geometryI, materialI, meshI, cubeI, objectI;

initI();
animateI();

var cursorX = 100;
var cursorY = 100;

document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}

function initI() {

    sceneI = new THREE.Scene();

    cameraI = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    cameraI.position.z = 500;
    sceneI.add(cameraI);
    
    //Load Crystal
    /*
    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader( manager );
    loader.load( 'assets/crystal/Crystal.obj', function ( object ) {

        object.traverse( function ( child ) {

            if ( child instanceof THREE.Mesh ) {

                child.material = new THREE.MeshNormalMaterial() ;

            }
        } );
        var s = 100;
        object.scale.set(s,s,s)
        //sceneI.add( object );
    });
    */
    
    cubeI = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), new THREE.MeshNormalMaterial() );

    rendererI = new THREE.WebGLRenderer({ alpha: true } );
    //rendererI.setClearColor( 0xffffff );
    //renderer.setPixelRatio( window.devicePixelRatio );
    rendererI.setSize( window.innerWidth/2, window.innerHeight/2 );
    $('#inline')[0].appendChild( rendererI.domElement );

    sceneI.add(cubeI)

}

function animateI() {
    cubeI.rotation.x = cursorX/1000;
    cubeI.rotation.y = cursorY/1000;
    
    renderI();
    requestAnimationFrame(animateI);

}

function renderI() {
    rendererI.render(sceneI, cameraI);
    //rendererCSS.render(sceneCSS, camera);
}