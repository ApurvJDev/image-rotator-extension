* Save the two files in a folder (e.g. `image-rotator-extension`). 
* Open `chrome://extensions`. 
* Enable **Developer mode** (top right). 
* Click **Load unpacked** and select that folder. 
* Open any image in a new tab (right-click → “Open image in new tab”). 
* Double-click the image — it should rotate 90° each time.

---

* **Open a .png in a new tab** → double-click rotates 90°, 180°, 270°, back to 0°.
* **Open a .jpg with a query string (photo.jpg?v=1)** — works if URL still matches matches.
* **Regular website with an image** — script should not run (or only on extension-matched URLs).
* **SVG / WebP** — same behavior if listed in `manifest.json`.
* **Disable/re-enable the extension** and reload the image tab.
