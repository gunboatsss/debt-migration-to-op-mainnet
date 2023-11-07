<script>
	import { goto } from '$app/navigation';
	import { connected } from '$lib/store';
	import { browser } from '$app/environment';
	import { DebtMigratorOnEthereum } from 'synthetix/contracts/DebtMigratorOnEthereum.sol';
	if (browser) {
		if (!$connected) {
			goto('/');
		}
	}
	console.log(DebtMigratorOnEthereum);
</script>

vesting!
