'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, BerycoinCoreLib) {
			return {
				getCurrentNetwork: function () {
					return BerycoinCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});