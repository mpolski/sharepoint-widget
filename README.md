# SharePoint Online Web Part: AI Agent Launcher

A premium, modern SharePoint Framework (SPFx) Web Part that displays a beautifully styled "AI Agent" card with a Fluent UI `PrimaryButton`. When clicked, the button opens your Google Cloud Vertex AI Search portal in a new tab!

This project is built using **SPFx v1.19.0**, **React 17**, and **Fluent UI React v8**.

---

## ✨ Features

* **Rich Visual Design**: A modern glassmorphic card with subtle drop-shadows and beautiful color gradients (`#0078d4` to `#5c2d91`) that instantly wow the user.
* **Interactive Micro-Animations**: Elegant hover transitions where the card floats upwards, the background glow expands, and the icon container scales and rotates dynamically.
* **Fluent UI Native Styling**: Leverages Microsoft's official Fluent UI components (`PrimaryButton` and `Icon`) to look like a native part of your SharePoint pages.
* **Theme-Aware**: Supports native SharePoint Online section backgrounds, adapting automatically to light and dark themes.

---

## ⚙️ Configuration & Deployment

This web part is designed to be fully configurable without needing to rebuild or redeploy the codebase.

### Exposing the Redirect URL as a Variable
The destination URL is exposed as a **Web Part Property** named `redirectUrl`. 

### How to Configure the URL in SharePoint (Deployment Steps):
1. Navigate to the SharePoint page where the web part is added.
2. Click **Edit** at the top right of the page to enter edit mode.
3. Select the **AI Agent** web part card, and click the **Edit Web Part** icon (the pencil icon in the floating toolbox).
4. The **Property Pane** will open on the right side of the screen.
5. In the **"AI Agent Redirect URL"** text field, you can paste the destination URL for your deployment (e.g. your production Vertex AI Search portal URL).
6. Click **Publish** (or **Republish**) at the top right of the page to save and apply the changes.

By default, the web part is preconfigured to use your custom Google Cloud Vertex AI Search workforce pool sign-in URL:
`https://auth.cloud.google/signin/locations/global/workforcePools/entraid-y6czq/providers/entra-id-y6czq?continueUrl=https%3A%2F%2Fvertexaisearch.cloud.google%2Fhome%2Fcid%2Fe6b2dc60-ba0b-4637-8c27-430bd8a4c39a&hl=en_U`

### How to Statically Replace the Icon/Logo:
If you want to package your custom logo or icon directly into the web part codebase (statically) so that it is deployed out-of-the-box:
1. Locate your own custom `.svg` image file.
2. Copy it into your project directory, **overwriting** the placeholder file located at:
   `src/webparts/aiAgent/assets/agent-icon.svg`
3. Restart your Gulp development server (stop it with `Ctrl + C` and run `npx gulp serve` again) and do a **hard refresh (Ctrl + F5)** in your browser! The compiler will rebuild the package using your new SVG logo and display it on the card.


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

