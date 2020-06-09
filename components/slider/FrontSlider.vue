<template>
	<div id="FrontSlider" class="dis-flex justify-content-center">
		<div class="col-lg-10 wrapper">
			<VueSlickCarousel :arrows="true" :dots="true" class="slider">
				<div class="item">
					<div class="content">
						<p>Monoteka-group - лучшие моменты жизни вместе с нашими платьями</p>
						<a href="#" class="button">купить</a>
					</div>
					<div class="image">
						<img src="https://images.unsplash.com/photo-1571643809050-0966a6c52572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80">
					</div>
				</div>
				<div class="item dis-flex">
					<div class="content">
						<p>Описение какого-то слайда</p>
						<a href="#" class="button">купить</a>
					</div>
					<div class="image">
						<img src="https://images.unsplash.com/photo-1571643809050-0966a6c52572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80">
					</div>
				</div>
			</VueSlickCarousel>
			<div class="actual">
				<div class="item">
					<div class="content">
						<h3>Пиджаки</h3>
						<a href="#">в наших магазинах</a>
					</div>
					<div class="image">
						<img src="https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80">
					</div>
				</div>
				<div class="item">
					<div class="content">
						<h3>Платья</h3>
						<a href="#">в наших магазинах</a>
					</div>
					<div class="image">
						<img src="https://images.unsplash.com/photo-1582110915002-ea6374a4da95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80">
					</div>
				</div>
			</div>
			<div class="categories">
				<div class="item">
					<div class="image">
						<img src="../../assets/images/icons/003-dress.svg">
					</div>
					<h4>Платья</h4>
				</div>
				<div class="item">
					<div class="image">
						<img src="../../assets/images/icons/003-dress.svg">
					</div>
					<h4>Платья</h4>
				</div>
				<div class="item">
					<div class="image">
						<img src="../../assets/images/icons/003-dress.svg">
					</div>
					<h4>Платья</h4>
				</div>
				<div class="item">
					<div class="image">
						<img src="../../assets/images/icons/003-dress.svg">
					</div>
					<h4>Платья</h4>
				</div>
				<div class="item">
					<div class="image">
						<img src="../../assets/images/icons/003-dress.svg">
					</div>
					<h4>Платья</h4>
				</div>
				<div class="item">
					<div class="image">
						<img src="../../assets/images/icons/003-dress.svg">
					</div>
					<h4>Платья</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'FrontSlider',
  components: {
  	VueSlickCarousel
  },
  directives: {

  },
  data () {
	  return {
	    
	  }
	}
}
</script>

<style lang="scss">
	$black : #111;
	$orange : #FF7F1A;
	#FrontSlider {
		height: 48vh;
		.wrapper {
			display: grid;
			grid-gap: 1px;
			grid-template-columns: repeat(6,6fr);
			grid-template-rows: repeat(7,7fr);
			a {
				color: $orange;
			}
			.slider {
				grid-column: 1/5;
				grid-row: 1/7; 
				height: 100%;
				width: 100%;
				.slick-list,
				.slick-track,
				.slick-slide,
				.slick-slide > div,
				.slick-slide > div > div {
					height: 100%;
				}
				.item {
					position: relative;
					overflow: hidden;
					height: 100%;
					&:after {
						content: '';
						position: absolute;
						bottom: 0;
						width: 100%;
						height: 50%;
						background: linear-gradient(180deg, rgba(252, 251, 251, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
						z-index: 0;
					}
					.content {
						display: flex;
						height: 100%;
						flex-direction: column;
					    justify-content: center;
					    align-items: flex-start;
						padding: 0 10rem;
						position: relative;
						z-index: 1;
						p {
							color: #fff;
							font-size: 2rem;
						}
					}
					.image {
						position: absolute;
						z-index: 0;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
						img {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
				}
			}
			.actual {
				grid-column: 5/7;
				grid-row: 1/7;
				height: 100%;
				display: grid;
				grid-template-columns: repeat(2,2fr);
				grid-gap: 1px;
				.item {
					position: relative;
					overflow: hidden;
					height: 100%;
					&:after {
						content: '';
						position: absolute;
						bottom: 0;
						width: 100%;
						height: 50%;
						background: linear-gradient(180deg, rgba(252, 251, 251, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
						z-index: 0;
					}
					.content {
						display: flex;
						height: 100%;
						padding: 1.5rem 1rem;
						position: relative;
						z-index: 1;
						flex-direction: column;
					    justify-content: flex-end;
					    text-align: center;
					    align-items: center;
					    h3 {
					    	color: #fff;
					    	margin-bottom: .55rem;
					    }
					}
					.image {
						position: absolute;
						z-index: 0;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
						img {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
				}
			}
			.categories {
				grid-column: 1/7;
				grid-row: 7/7;
				display: grid;
				grid-template-columns: repeat(6,6fr);
				grid-gap: 1px;
				.item {
					background-color: $black;
					color: #fff;
					text-align: center;
					text-transform: uppercase;
					padding: .45rem 0;
					display: flex;
					flex-direction: column;
				    justify-content: flex-end;
				    text-align: center;
				    align-items: center;
					.image {
						img {
							filter: invert(1);
							width: 2rem;
						}
					}
				}
			}
		}
	}
</style>