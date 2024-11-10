declare module 'jquery.repeater' {
  interface RepeaterOptions {
      initEmpty?: boolean;
      defaultValues?: Record<string, any>;
      show?: (this: JQuery) => void;
      hide?: (this: JQuery, deleteElement: () => void) => void;
      isFirstItemUndeletable?: boolean;
  }

  interface JQuery {
      repeater(options?: RepeaterOptions): JQuery;
  }
}
