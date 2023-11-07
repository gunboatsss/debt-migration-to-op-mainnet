<script>
	import '../app.postcss';
	import { createPublicClient, createWalletClient, http, custom } from 'viem';
	import { mainnet } from 'viem/chains';
	import { addresses, connected, selectedAddress } from '$lib/store';
	import PrimaryButton from '$lib/PrimaryButton.svelte';
	import SecondaryButton from '$lib/SecondaryButton.svelte';
	import { DebtMigratorOnEthereum } from 'synthetix/contracts/DebtMigratorOnEthereum.sol';
	import { goto } from '$app/navigation';
	const publicClient = createPublicClient({
		chain: mainnet,
		transport: http()
	});
	let walletClient;
	async function connectWallet() {
		walletClient = createWalletClient({
			chain: mainnet,
			transport: custom(window.ethereum)
		});
		addresses.set(await walletClient.requestAddresses());
		selectedAddress.set($addresses[0]);
		console.log($addresses);
		connected.set(true);
	}
	function disconnect() {
		walletClient = null;
		addresses.set([]);
		connected.set(false);
		goto('/');
	}
</script>

<header class="flex items-center">
	<div class="grow"></div>
	<div id="connect" class="mt-4 mr-4">
		{#if $connected}
			<span class="font-bold">
			{#await publicClient.getEnsName({ address: $selectedAddress })}
				{$selectedAddress.slice(0, 6) + '...' + $selectedAddress.slice(-4)}
			{:then name}
				{name}
			{:catch error}
				{$selectedAddress.slice(0, 6) + '...' + $selectedAddress.slice(-4)}
			{/await}
			</span>
			<SecondaryButton on:click={disconnect}>Disconnect</SecondaryButton>
		{:else}
			<PrimaryButton on:click={connectWallet}>Connect Wallet</PrimaryButton>
		{/if}
	</div>
</header>
<div class="m-4">
<slot />
</div>