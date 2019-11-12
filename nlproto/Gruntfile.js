module.exports = function( grunt ) {

	'use strict';
	var babelify=require('babelify');
	// Project configuration

	let deployRoot="public_html/wp-content/plugins/ws_retention_plans";

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		env:{
			prod:{
				NODE_ENV: 'production'
			}
		},

		run: {
			test:{
				cmd:'jest'
			}
		},
		browserify:{
			 default:{
						options:{
							 transform:[[babelify, {presets:['@babel/preset-react', '@babel/preset-env']}],
							 ],
						},
						src: ['./src/NLApp.rc.js'],
						dest:'./dist/NLApp.js'
				}
			 },
		watch:{
				options:{
						forever:false
				},
				default:{
						files: ['./src/**'],
						tasks: ['browserify']
					}
				},
		uglify:{
          options:{
              mangle:{
                  reserved:['document']
              },
              compress:{
				        global_defs: {
				          'DEBUG': false
				        },
				        dead_code: true
      				}
          },
          default:{
              src: ['./dist/NLApp.js'],
                dest:'./dist/NLApp.min.js'
          }
      },
			cssmin:{
         target:{
             files:[{
                     expand:true,
                     cwd:'css',
                     src:['*.css', '!*.min.css'],
                     dest:'css',
                     ext: '.min.css'
             }]
         }
     }
});

	grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-env');

	grunt.registerTask('default', ['env', 'browserify', 'uglify']);


	grunt.util.linefeed = '\n';

};
