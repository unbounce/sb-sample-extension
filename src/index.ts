import { registerControl, registerComponent, registerSection } from 'ub-shared';

import { Control } from './control';
import { Component } from './hello-world';
import { Template } from './hello-world-section';

/**
 * Feel free to register whatever you need to export.
 * IMPORTANT: Registration ordering is important.
 */
registerControl(Control);
registerComponent(Component);
registerSection(Template);
