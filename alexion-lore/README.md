# Alexion Lore Database

Canonical bilingual lore repository for the Alexion universe.

## Goals

- Store public, hidden and creator-only canon.
- Keep Russian and English lore synchronized.
- Provide structured data for AI characters and quest generation.
- Generate a public lore index for Questicity.
- Record new quest events without breaking canon.

## Access levels

- `public` — may be shown on the official Questicity website.
- `hidden` — may be revealed gradually through quests.
- `creator` — internal truth for writers and AI orchestration.
- `character` — available only to specified characters.

## Canon statuses

- `confirmed`
- `theory`
- `rumor`
- `disputed`
- `unresolved`
- `deprecated`

## Commands

```bash
npm install
npm run validate
npm run build
```

`npm run build` creates `site/lore-index.json`, which can be used by the web admin or public Questicity website.
