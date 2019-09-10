import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kps';
  constructor() { }

  ngOnInit() {
  	var offcanvasMenu = function() {

		$('#page').prepend('<div id="kps-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-kps-nav-toggle kps-nav-toggle kps-nav-black"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#kps-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#kps-offcanvas').append(clone2);

		$('#kps-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#kps-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-kps-nav-toggle').removeClass('active');
				
	    	}
		});
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-kps-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	$(function(){
		offcanvasMenu();
		burgerMenu();
	});
	
  }
}
