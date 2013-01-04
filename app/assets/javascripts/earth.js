  //Create an earth like object!
  var scene    = new THREE.Scene()
  var camera   = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add Earth Object
  var earth_texture  = new THREE.ImageUtils.loadTexture('/assets/earth_sm.jpg', {}, function(){
    renderer.render(scene, camera);
  });
  var earth_geometry = new THREE.SphereGeometry(2, 32, 32 );
  var earth_material = new THREE.MeshPhongMaterial({map: earth_texture});
  var earth          = new THREE.Mesh(earth_geometry, earth_material);

  // Add Cloud Object
  var cloud_texture  = new THREE.ImageUtils.loadTexture('/assets/clouds_transparent_sm.png', {}, function(){
    renderer.render(scene, camera);
  });
  var cloud_geometry = new THREE.SphereGeometry(2.08, 32, 32 );
  var cloud_material = new THREE.MeshPhongMaterial({map: cloud_texture, transparent:true});
  var clouds         = new THREE.Mesh(cloud_geometry, cloud_material);

  // Add Earth Glow
  var glow_texture  = new THREE.ImageUtils.loadTexture('/assets/glow.png', {}, function(){
    renderer.render(scene, camera);
  });
  var glow_geometry = new THREE.PlaneGeometry(5, 5);
  var glow_material = new THREE.MeshBasicMaterial({map:glow_texture, transparent:true});
  var glow          = new THREE.Mesh(glow_geometry, glow_material);

  // positions for earth and clouds and glow
  x_position = 1.5;
  y_position = 0;

  earth.position.x = clouds.position.x = x_position;
  earth.position.y = clouds.position.y = y_position;

  glow.position.x = x_position + 0.1;
  glow.position.y = y_position + 0.1;

  earth.rotation.y = clouds.rotation.y = 5.5;
  earth.rotation.x = clouds.rotation.x = .2;

  // base rotation speed for earth and clouds
  rotation_speed = .0005;

  camera.position.z = 5.5;

  point_light_01 = new THREE.DirectionalLight(0xffffff, 1.3);
  point_light_01.position.set(-1.3, 1, .5);

  scene.add(earth);
  scene.add(clouds);
  scene.add(point_light_01);
  scene.add(glow);

  function render(){
    requestAnimationFrame(render);

    earth.rotation.y  += rotation_speed;
    clouds.rotation.y += rotation_speed + .0001;

    renderer.render(scene, camera);

  }
  render();

  // deal with window resizing.
  $(window).resize(function(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
