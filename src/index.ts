import { registerComponent, registerSection } from 'ub-shared';

import { Component } from './hello-world';
import { Template } from './hello-world-section';

/**
 * Feel free to register whatever you need to export.
 * IMPORTANT: Registration ordering is important.
 */
registerComponent(Component);
registerSection(Template);
