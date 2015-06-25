/*
 * Desk
 * Created: 17 June 2015
 * Author: Kelsey Hawley
 */

 angular.module( 'jsb.desk', [

])

.config(function config( $stateProvider ) {

})

.controller( 'deskController', function DeskController( $scope ) {

    /**
     * Set up the desktop canvas for use
     * 
     */
    $scope.start = function() {
      // Retreive the canvas element
      var canvas = new fabric.Canvas('desktop');

      var rect = new fabric.Rect({
        left: 1,
        top: 1,
        fill: 'red',
        width: 20,
        height: 20
      });

      canvas.add(rect);

    };
});