<template>
	<div>
	 	<header id="header" class="dis-flex justify-content-center">
	 		<div class="col-lg-10 dis-flex">
				<div class="col-lg-4 dis-flex align-items-center">
					<div id="katalog-btn">
						каталог
					</div>
					<ul class="menu">
						<li>
							<a href="#">компания</a>
						</li>
						<li>
							<a href="#">новости</a>
						</li>
					</ul>
				</div>
				<div class="col-lg-4 text-center">
					<div id="logo">
						<a href="/">
							<!-- <img src=""> -->
							MONO<span>TEKA</span>
						</a>
					</div>
				</div>
				<div class="col-lg-4 dis-flex justify-content-end">
					<ul class="menu">
						<li>
							<a href="#">Поставщикам</a>
						</li>
						<li>
							<a href="#">Контакты</a>
						</li>
						<li>
							<a href="#">Кабинет</a>
						</li>
					</ul>
					<div class="meta">
						<div id="search-btn"></div>
						<div id="cart-btn"></div>
					</div>
				</div>
	 		</div>
			
	 	</header>
	 	<slot></slot>
	 	<footer id="footer" class="dis-flex justify-content-center">
	 		<div class="col-lg-8 dis-flex">
				footer
	 		</div>	
	 	</footer>
	 </div>
</template>

<script>
export default {
  name: 'mainLayout',
  components: {
  	
  }
}
</script>

<style lang="scss">
	* {
	    border: 0;
	    outline: 0;
	    margin: 0;
	    padding: 0;
	    box-sizing: border-box;
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box
	}
	$black : #111;
	$orange : #FF7F1A;
	#header {
		padding: 1rem 0;
		.menu {
			display: flex;
			align-items: center;
			list-style: none;
			li {
				&:not(:last-child) {
					margin-right: 4rem;
				}
				a {
					text-decoration: none;
					text-transform: uppercase;
					color: $black;
					transition: all .2s ease-in-out;
					
					&:hover {
						color: $orange;
					}
				}
			}
		}
		.meta {
			display: flex;
			align-items: center;
			margin-left: 4rem;
		}
	}
	#katalog-btn {
		margin-right: 4rem;
		text-transform: uppercase;
		background-color: $orange;
		color: #fff;
		padding: .4rem 1rem;
		cursor: pointer;
    	padding-right: 4.5rem;
    	
	}
	#logo {
		a {
			text-decoration: none;
			color: $black;
			font-size: 1.5rem;
			span {
				color: $orange;
			}
		}
	}
	@mixin MetaBtns {
		background-size: contain;
		width: 1rem;
		height: 1rem;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		cursor: pointer;
	}
	#search-btn {
		@include MetaBtns;
		margin-right: 2rem;
		background-image: url(../assets/images/icons/002-search.svg);
	}
	#cart-btn {
		@include MetaBtns;
		background-image: url(../assets/images/icons/001-shopping-cart.svg);
	}
</style>