<script>
	const googleMapsUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.723051779626!2d0.7912112!3d42.7095846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a891cb4c55653d%3A0xe8cbbc0203670d9b!2sAran%20Parapent%20%2F%20Parapente%20en%20Catalunya%20%2F%20Volar%20en%20Biplaza%20en%20los%20Pirineos!5e0!3m2!1sen!2sma!4v1740603356105!5m2!1sen!2sma';
</script>

<section class="map-container">
	<iframe
		title="Ubicación de Aran Parapent en Google Maps"
		src={googleMapsUrl}
		allowfullscreen
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
</section>

<style>
	.map-container {
		width: 100%;
		height: 400px;
		display: flex;
	}

	iframe {
		flex: 1;
		border: 0;
	}
</style>
