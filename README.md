# card
dev env: https://card.deno.dev/


### Local development

Install deno:
https://deno.land/#installation

Install deployctl:

```
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

Install fresh CLI:
```
deno install -A -f --no-check -n fresh https://raw.githubusercontent.com/lucacasonato/fresh/main/cli.ts
```

Start the project:

```
deployctl run --no-check --watch main.ts
```

After adding, removing, or moving a page in the `pages` directory, run:

```
fresh routes
```