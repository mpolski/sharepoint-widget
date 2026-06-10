# HR Agent Launcher: SharePoint Online Web Part

> [!NOTE]
> **Meet-the-Users-Where-They-Are Example:**
> In this example, we add a widget to an HR SharePoint site that will open the HR Agent (not built as part of this example, so it is a prerequisite) in Gemini Enterprise. The widget seamlessly handles authentication (this requires Workload Identity Federation (WIF) to be configured in GCP with Entra ID, which is also a prerequisite).

A modern SharePoint Framework (SPFx) Web Part that displays "HR Agent" card with a Fluent UI button. When clicked, the button opens a new tab with Gemini Enterprise for the authenticated user where a user can call out the HR Agent and use it from there.


Here's a sample result after adding a HR Agent button to a SharePoint site.
![Alt text](https://github.com/mpolski/sharepoint-widget/blob/main/HR%20Agent%20widget.png)

---

## 💻 Part 1: Local Development & Testing

Follow these steps to run, test, and customize the web part in a local development environment:

### 1. Prerequisites & Environment Setup
Because SharePoint Framework has strict Node.js version compatibility limits, please ensure your environment is configured correctly:
* **Node.js Version**: Requires **Node.js v18** (specifically `v18.17.1` to `v18.20.x`). Use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to switch:
  ```bash
  nvm use 18
  ```
* **Linux Chrome Certificate Trust**: 
  Since automatic certificate trust is not supported on Linux by default, you must allow Chrome to load the local scripts:
  * **Easiest Option**: Open Chrome and navigate to `chrome://flags/#allow-insecure-localhost`. Change the setting to **Enabled** and relaunch Chrome.
  * **Alternative Option**: Import the certificate located at `/usr/local/google/home/mpolski/.rushstack/rushstack-serve.pem` into Chrome's **Trusted Certificates** store.

### 2. Running the Web Part Locally
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
   *Note: Gulp will start the local server on `https://localhost:4321` and attempt to open the browser. Since the offline workbench is deprecated in modern SPFx, ignore the failed workbench tab and proceed to the next step.*
4. **Open the SharePoint Online Workbench:**
   Navigate to your actual SharePoint Online tenant workbench, appending the debug query parameters to load your local scripts:
   ```text
   https://<your-tenant-name>.sharepoint.com/_layouts/15/workbench.aspx?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js
   ```
   *(Replace `<your-tenant-name>` with your actual SharePoint Online tenant domain, e.g. `contoso` or `mycompany`).*
5. **Allow Debug Scripts:**
   When prompted by the browser dialog, click **"Allow debug scripts"**.
6. **Add the Web Part:**
   Click the **`+`** icon on the canvas, search for **`HR Agent`**, and add it to the page!

### 3. How to Statically Replace the Icon/Logo
If you want to package your custom logo or icon directly into the web part codebase (statically) so that it is deployed out-of-the-box:
1. Locate your own custom `.svg` image file.
2. Copy it into your project directory, **overwriting** the placeholder file located at:
   `src/webparts/aiAgent/assets/agent-icon.svg`
3. Restart your Gulp development server (`Ctrl + C` then `npx gulp serve`) and perform a **hard refresh (Ctrl + F5)** in your browser. The compiler will rebuild the package using your new SVG logo and display it on the card.

---

## 🚀 Part 2: Deployment & Configuration

Follow these steps to build, package, and deploy the web part to your production SharePoint Online environment:

### 1. Build and Package for Production
Run the following commands in your project directory:
```bash
# Clean previous temporary builds
npx gulp clean

# Build the production bundle (minifies code and assets for Office 365 CDN)
npx gulp bundle --ship

# Package the solution (creates the .sppkg file)
npx gulp package-solution --ship
```
This will generate the final installation package file at:
`sharepoint/solution/sharepoint-widget.sppkg`

### 2. Upload to the App Catalog
1. Go to your SharePoint **App Catalog** site (SharePoint Admin Center -> **Apps** -> **Manage Apps**).
2. Upload the `sharepoint-widget.sppkg` file.
3. Choose to make the solution available to all sites in your tenant, and click **Enable app**.

### 3. Install on your SharePoint Site Collection
If you did not enable the app for all sites in the App Catalog, you must add it to your specific site (e.g. `HRPortal`):
1. Navigate to your SharePoint site homepage.
2. Click the **Gear icon** (Settings) -> **Add an app** (or **Site Contents** -> **New** -> **App**).
3. Under **From Your Organization**, select **HR Agent** and click **Add** (or **Install**).
4. Wait 10-15 seconds for the installation to complete.

### 4. Add to Live SharePoint Pages & Configure URL
1. Go to the live SharePoint page where you want the card.
2. Click **Edit**, click the **`+`** icon, search for **"HR Agent"**, and add it.
3. Click the **Pencil icon** (Edit Web Part) to open the Property Pane on the right.
4. In the **"AI Agent Redirect URL"** text field, paste your production portal link:
   `<Gemini Enterprise webapp link>`
5. Click **Publish** (or **Republish**) in the top-right corner to make it live for everyone!
