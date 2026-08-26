<script lang="ts">
	let { showModal = $bindable(false), title = 'Contactar' } = $props();
	const phoneNumber = '+34649964007';

	function closeContactModal() {
		showModal = false;
	}

	export function callNumber() {
		window.location.href = `tel:${phoneNumber}`;
		closeContactModal();
	}

	export function messageOnWhatsApp() {
		window.location.href = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
		closeContactModal();
	}

	function handleClickOutside(event: MouseEvent) {
		if ((event.target as HTMLElement).id === 'contactModal') {
			closeContactModal();
		}
	}
</script>

<div
	id="contactModal"
	class="fixed inset-0 z-990 flex items-center justify-center bg-black/50 px-4"
	onclick={handleClickOutside}
	role="presentation"
>
	<div
		class="relative w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg"
		role="dialog"
		aria-modal="true"
		aria-labelledby="contact-title"
	>
		<h2 id="contact-title" class="mb-4 text-lg font-semibold">{title}</h2>
		<button type="button" onclick={callNumber} class="mb-2 w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700">
			📞 Llamada
		</button>
		<button type="button" onclick={messageOnWhatsApp} class="w-full rounded-md bg-green-600 py-2 text-white transition hover:bg-green-700">
			💬 WhatsApp
		</button>
		<button
			type="button"
			onclick={closeContactModal}
			class="absolute right-3 top-2 text-lg text-gray-500 transition hover:text-gray-800"
			aria-label="Cerrar contacto"
		>
			✖
		</button>
	</div>
</div>
