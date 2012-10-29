// Type definitions for Sammy.js
// Project: http://sammyjs.org/
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="jquery-1.8.d.ts"/>

module Sammy {
    export function (): Sammy.Application;
    export function (selector: string): Sammy.Application;
    export function (handler: Function): Sammy.Application;
    export function (selector: string, handler: Function): Sammy.Application;

    export function Cache(app, options);
    export function DataCacheProxy(initial, $element);
    export function DataLocationProxy(app, data_name, href_attribute);
    export function DefaultLocationProxy(app, run_interval_every);
    export function EJS(app, method_alias);

    export function Exceptional(app, errorReporter);
    export function Flash(app);
    export function Form(app); // formFor ( name, object, content_callback )

    export function Haml(app, method_alias);
    export function Handlebars(app, method_alias);
    export function Hogan(app, method_alias);
    export function Hoptoad(app, errorReporter);
    export function JSON(app);
    export function Meld(app, method_alias);
    export function MemoryCacheProxy(initial);
    export function Mustache(app, method_alias);
    export function NestedParams(app);
    export function OAuth2(app);
    export function PathLocationProxy(app);
    export function Pure(app, method_alias);
    export function PushLocationProxy(app);
    export function Session(app, options);
    export function Storage(app);

    export function Title();
    export function Tmpl(app, method_alias);
    export function addLogger(logger);
    export function log();

    export interface Object {

        constructor (obj: any);

        escapeHTML(s: string): string;
        h(s: string): string;

        has(key: string): bool;
        join(...args: any[]): string;
        keys(attributes_only?: bool): string[];
        log(...args: any[]): void;
        toHTML(): string;
        toHash(): any;
        toString(include_functions?: bool): string;
    }

    export interface Application extends Object {

        ROUTE_VERBS: string[];
        APP_EVENTS: string[];

        (appFn: Function);

        $element(selector?: string): JQuery;
        after(callback: Function): Application;
        any(verb: string, path: string, callback: Function): void;
        route(verb: string, path: string, callback: Function): void;
        around(callback: Function): Application;
        before(options: any, callback: Function): Application;
        bind(name: string, callback: Function): Application;
        bind(name: string, data: any, callback: Function): Application;
        bindToAllEvents(callback: Function): Application;
        clearTemplateCache(): any;
        contextMatchesOptions(context: any, match_options: any, positive?: bool): bool;
        del(path: string, callback: Function): Application;
        del(path: RegExp, callback: Function): Application;
        destroy(): Application;
        error(message: string, original_error: Error): void;
        eventNamespace(): string;
        get(path: string, callback: Function): Application;
        get(path: RegExp, callback: Function): Application;
        getLocation(): string;
        helper(name: string, method: Function): Application;
        helpers(extensions: any): Application;
        isRunning(): bool;
        log(...params: any[]): void;
        lookupRoute(verb: string, path: string): any;
        mapRoutes(route_array: any[]): Application;
        notFound(verb: string, path: string): any;
        post(path: string, callback: Function): Application;
        post(path: RegExp, callback: Function): Application;
        put(path: string, callback: Function): Application;
        put(path: RegExp, callback: Function): Application;
        refresh(): Application;
        routablePath(path: string): string;
        route(verb: string, path: string, callback: Function): Application;
        route(verb: string, path: RegExp, callback: Function): Application;
        run(start_url?: string): Application;
        runRoute(verb: string, path: string, params: any, target: any): any;
        setLocation(new_location: string): string;
        setLocationProxy(new_proxy: DataLocationProxy): void;
        swap(content: any, callback: Function): string;
        templateCache(key: string, value: any): any;
        toString(): string;
        trigger(name: string, data?: any): Application;
        unload(): Application;
        use(...params: any[]): void;
    }

    export interface DataLocationProxy {
        constructor (app, run_interval_every): DataLocationProxy;
        fullPath(location_obj): string;
        bind(): void;
        unbind(): void;
        setLocation(new_location: string): string;
        _startPolling(every: number): void;
    }

    export interface EventContext extends Object {
        constructor (app, verb, path, params, target);
        $element(): JQuery;
        engineFor(engine: any): any;
        eventNamespace(): string;
        interpolate(content: any, data: any, engine: any, partials): EventContext;
        json(str: string): any;
        load(location: any, options?: any, callback?: Function): any;
        loadPartials(partials);
        notFound(): any;
        partial(location, data, callback, partials);
        redirect(...params: any[]): void;
        render(location: string, data: any, callback: Function, partials): RenderContext;
        renderEach(location: any, name?: string, data?: any, callback?: Function): RenderContext;
        send(...params: any[]): RenderContext;
        swap(contents: any, callback: Function): string;
        toString(): string;
        trigger(name: string, data?: any): EventContext;
    }

    export interface FormBuilder {
        constructor (name, object);
        checkbox(keypath, value, attributes);
        close();
        hidden(keypath, attributes);
        label(keypath, content, attributes);
        open(attributes);
        password(keypath, attributes);
        radio(keypath, value, attributes);
        select(keypath, options, attributes);
        submit(attributes);
        text(keypath, attributes);
        textarea(keypath, attributes);
    }

    export interface GoogleAnalytics {
        constructor (app, tracker);
        noTrack();
        track(path);
    }

    export interface RenderContext extends Object {
        constructor (event_context);
        appendTo(selector: string): RenderContext;
        collect(array: any[], callback: Function, now?: bool): RenderContext;
        interpolate(data: any, engine?: any, retain?: bool): RenderContext;
        load(location: string, options?: any, callback?: Function): RenderContext;
        loadPartials(partials?: any): RenderContext;
        next(content: any): void;
        partial(location: string, callback: Function, partials): RenderContext;
        partial(location: string, data: any, callback: Function, partials): RenderContext;
        prependTo(selector: string): RenderContext;
        render(callback: Function): RenderContext;
        render(location: string, data: any): RenderContext;
        render(location: string, callback: Function, partials?: any): RenderContext;
        render(location: string, data: any, callback: Function): RenderContext;
        render(location: string, data: any, callback: Function, partials: any): RenderContext;
        renderEach(location: string, name: string, data: any, callback: Function): RenderContext;
        replace(selector: string): RenderContext;
        send(...params: any[]): RenderContext;
        swap(callback: Function): RenderContext;
        then(callback: Function): RenderContext;
        trigger(name, data);
        wait(): void;
    }


    export interface StoreOptions {
        name?: string;
        element?: string;
        type?: string;
        memory?: any;
        data?: any;
        cookie?: any;
        local?: any;
        session?: any;
    }

    export interface Store {
        constructor (options);

        clear(key);
        clearAll();
        each(callback);
        exists(key);
        fetch(key, callback);
        filter(callback);
        first(callback);
        get(key);
        isAvailable();
        keys();
        load(key, path, callback);
        set(key, value);

        Cookie(name, element, options);
        Data(name, element);
        LocalStorage(name, element);
        Memory(name, element);
        SessionStorage(name, element);
        isAvailable(type);
        Template(app, method_alias);
    }

}
interface JQueryStatic {
    sammy: Sammy;
}