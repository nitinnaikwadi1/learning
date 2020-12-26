if ( window.addToHomescreen ) { 
  ath = addToHomescreen( { 
  onCanInstall: function ( platform, _instance ) { 
  //run any on screen prompting logic from here 
  },
  onBeforeInstallPrompt: function ( platform ) { 
  //this triggers in response to the browser triggering the beforeInstallPrompt event 
  console.log( "native prompt: ", platform ); 
  }
  } ); 
 }