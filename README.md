# SharePoint Online Web Part: AI Agent Launcher

A premium, modern SharePoint Framework (SPFx) Web Part that displays a beautifully styled "AI Agent" card with a Fluent UI `PrimaryButton`. When clicked, the button opens `https://google.com` in a new browser tab.

This project is built using **SPFx v1.19.0**, **React 17**, and **Fluent UI React v8**.

---

## ✨ Features

* **Rich Visual Design**: A modern glassmorphic card with subtle drop-shadows and beautiful color gradients (`#0078d4` to `#5c2d91`) that instantly wow the user.
* **Interactive Micro-Animations**: Elegant hover transitions where the card floats upwards, the background glow expands, and the icon container scales and rotates dynamically.
* **Fluent UI Native Styling**: Leverages Microsoft's official Fluent UI components (`PrimaryButton` and `Icon`) to look like a native part of your SharePoint pages.
* **Theme-Aware**: Supports native SharePoint Online section backgrounds, adapting automatically to light and dark themes.

---

## 📋 Prerequisites & Environment

Because SharePoint Framework has strict Node.js version compatibility limits, please ensure your environment is configured correctly:

1. **Node.js Version**: Requires **Node.js v18** (specifically `v18.17.1` to `v18.20.x`). 
   Use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to switch:
   ```bash
   nvm use 18
   ```

2. **Linux Chrome Certificate Trust**: 
   Since automatic certificate trust is not supported on Linux by default, you must allow Chrome to load the local scripts:
   * **Easiest Option**: Open Chrome and navigate to `chrome://flags/#allow-insecure-localhost`. Change the setting to **Enabled** and relaunch Chrome.
   * **Alternative Option**: Import the certificate located at `/usr/local/google/home/mpolski/.rushstack/rushstack-serve.pem` into Chrome's **Trusted Certificates** store (Settings -> Privacy and security -> Security -> Manage certificates -> Authorities -> Import).

---

## 🚀 Minimal Path to Awesome

Follow these steps to run the web part locally:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Trust the Dev Certificate:**
   ```bash
   npx gulp trust-dev-cert
   ```

3. **Start the Development Server:**
   ```bash
   npx gulp serve
   ```
   *Note: Gulp will start the local server on `https://localhost:4321` and attempt to open the browser. Since the local offline workbench is deprecated, ignore the failed tab and proceed to the next step.*

4. **Open the SharePoint Online Workbench:**
   Navigate to your actual SharePoint Online tenant workbench, appending the debug query parameters to load your local scripts:
   ```text
   https://<your-tenant-name>.sharepoint.com/_layouts/15/workbench.aspx?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js
   ```
   *(Replace `<your-tenant-name>` with your actual SharePoint Online tenant domain, e.g. `contoso` or `mycompany`).*

5. **Allow Debug Scripts:**
   When prompted by the browser dialog, click **"Allow debug scripts"**.

6. **Add the Web Part:**
   Click the **`+`** icon on the canvas, search for **`AiAgent`**, and add it to the section!

