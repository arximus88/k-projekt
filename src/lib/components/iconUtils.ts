// iconUtils.ts
export function replaceFillColor(svgString: string, fillColor: string): string {
    return svgString.replace(/fill\s*=\s*["'].*?["']/g, `fill="${fillColor}"`);
  }
  