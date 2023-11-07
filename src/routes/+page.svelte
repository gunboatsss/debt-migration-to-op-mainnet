<script>
	import { goto } from "$app/navigation";
    import { connected } from "$lib/store";
    connected.subscribe((value) => {
        if (value) goto('vesting');
    })
</script>


<div>
    <h1 class="font-bold">Welcome to Unofficial Synthetix Debt Migration!</h1>
    <p>To get started, please connect your wallet.</p>
    </div>
