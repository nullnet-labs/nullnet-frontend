/**
 * Homebrew replacement for the suggested dependency clsx, which, at the time 
 * of writing, hadn't been maintained for years and contained vulnerabilities.
 * 
 * Instead, this agnostically re-implements its primary functionality: turning 
 * a list of class names (like would be used in a browser DOM's 
 * document.element.classList.add) into a JSX-usable className string.
 * 
 * @param classNames 
 * @returns 
 */
export default function CssClassList(...classNames:string[]):string {
    return classNames.filter(Boolean).join(" ");
};
