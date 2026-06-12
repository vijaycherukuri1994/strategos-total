# STRATEGOS → GitHub from iPad

### No Terminal. No Git. Just a browser.

-----

## The iPad reality

iPad has no Terminal and no Git. But GitHub has a **full web editor** built in — you can create a repo and upload every file directly from Safari. Takes about 10 minutes.

-----

## PHASE 1 — Create your GitHub account (if you don’t have one)

1. Open **Safari** → go to **github.com**
1. Tap **Sign up**
1. Enter your email, pick a username and password
1. Verify your email
1. Sign in

-----

## PHASE 2 — Create the repository

1. Tap the **＋** icon (top right of github.com) → **New repository**
1. Fill in:
- **Repository name:** `strategos-total`
- **Description:** `Agentic strategy intelligence — PWA, Claude Project, Python agent`
- Visibility: **Public** (shareable) or **Private** (just you)
- ✅ Check **“Add a README file”** ← do this on iPad so the repo isn’t empty
1. Tap **Create repository**

-----

## PHASE 3 — Upload your files

You’ll upload folder by folder. GitHub’s web uploader handles multiple files at once.

### 3a — Upload the PWA files

1. In your new repo, tap **Add file → Upload files**
1. You’ll see a file picker area
1. Tap **choose your files**
1. Navigate to your **Downloads → strategos-pwa** folder
1. Select ALL files inside it:
- index.html
- app.js
- sw.js
- manifest.json
- icon-192.png
- icon-512.png
- strategos-vault.md
1. In the **“Commit changes”** box at the bottom type:
   `Add PWA phone app files`
1. Tap **Commit changes**

### 3b — Upload the Claude agent files

1. Tap **Add file → Upload files** again
1. Tap **choose your files**
1. Navigate to **Downloads → claude-agent** folder
1. Select ALL files:
- PROJECT-INSTRUCTIONS.md
- strategos-vault.md
- strategos_agent.py
1. Commit message: `Add Claude Project and Python agent`
1. Tap **Commit changes**

### 3c — Replace the README

1. Tap **Add file → Upload files**
1. Select your **README.md** from Downloads
1. Commit message: `Add install guide`
1. Tap **Commit changes**

### 3d — Upload the GitHub guide

1. Same process — upload **GITHUB-GUIDE.md**
1. Commit message: `Add GitHub guide`
1. Tap **Commit changes**

-----

## ✅ Done — your repo is live

Your repo now looks like:

```
strategos-total/
├── README.md
├── GITHUB-GUIDE.md
├── index.html
├── app.js
├── sw.js
├── manifest.json
├── icon-192.png
├── icon-512.png
├── strategos-vault.md
├── PROJECT-INSTRUCTIONS.md
└── strategos_agent.py
```

> Note: GitHub’s web uploader doesn’t support nested folders well on iPad.
> So all files land in the root — that’s fine. Everything still works.

-----

## PHASE 4 — Host the PWA free (GitHub Pages)

This turns your repo into a live HTTPS website — which is how you install it on any Android phone.

1. In your repo, tap the **Settings** tab (top of the repo page)
1. Scroll down the left sidebar → tap **Pages**
1. Under **Source** → select **Deploy from a branch**
1. Branch: **main** · Folder: **/ (root)**
1. Tap **Save**

Wait 2–3 minutes. Your app is live at:

```
https://yourusername.github.io/strategos-total/
```

Open that URL on an Android phone in Chrome → tap ⋮ → **Add to Home screen** → installed.

-----

## Editing files later from iPad

GitHub has a built-in editor — no Mac needed ever.

1. In your repo, tap any file (e.g. `app.js`)
1. Tap the **pencil icon** ✏️ (top right)
1. Edit directly in the browser
1. Tap **Commit changes** when done

For bigger edits, tap the **.** key (period) anywhere in the repo — it opens **github.dev**, a full VS Code editor that runs entirely in the browser on iPad.

-----

## If a file needs updating

1. Go to the file in your repo
1. Tap ✏️ to edit, or tap **Add file → Upload files** to replace it
1. Commit — GitHub Pages updates within 2 minutes

-----

## Troubleshooting

|Problem                          |Fix                                                                            |
|---------------------------------|-------------------------------------------------------------------------------|
|Can’t see the Upload button      |You must be signed in                                                          |
|Files upload but app doesn’t work|Make sure index.html is in the root, not a subfolder                           |
|GitHub Pages URL shows 404       |Wait 3 more minutes and hard-refresh                                           |
|Want nested folders on iPad      |Use **github.dev** (press `.` in your repo) — it supports drag-and-drop folders|