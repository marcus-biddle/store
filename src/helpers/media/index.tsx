export const showIfOrElseWindow = (window: number) => (desktopContent: any) => (mobileContent: any) => window < 768 ? mobileContent : desktopContent;