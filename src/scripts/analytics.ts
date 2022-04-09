function logEvent(action: string, category: string, label: string) {
    // @ts-ignore
    gtag("event", action, { event_category: category, event_label: label });
}
