import { toBlob } from "html-to-image";

export interface ShareImageOptions {
  hideSelector?: string; // CSS selector para ocultar nodos antes de capturar
  fileName?: string;
  shareTitle?: string;
  shareText?: string;
}

/**
 * Genera una imagen PNG de un nodo y la comparte o descarga.
 * Oculta temporalmente los nodos que coincidan con hideSelector.
 */
export async function shareNodeAsImage(
  node: HTMLElement,
  options: ShareImageOptions = {}
) {
  const { hideSelector, fileName = "imagen.png", shareTitle = "", shareText = "" } = options;
  let hiddenNodes: HTMLElement[] = [];
  if (hideSelector) {
    hiddenNodes = Array.from(node.querySelectorAll(hideSelector));
    hiddenNodes.forEach((el) => (el.style.display = "none"));
  }
  try {
    const blob = await toBlob(node);
    hiddenNodes.forEach((el) => (el.style.display = ""));
    if (!blob) return;
    const file = new File([blob], fileName, { type: blob.type });
    const data = {
      files: [file],
      title: shareTitle,
      text: shareText,
    };
    if (navigator.canShare && navigator.canShare(data)) {
      await navigator.share(data);
    } else {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    }
  } catch (err) {
    hiddenNodes.forEach((el) => (el.style.display = ""));
    throw err;
  }
}
