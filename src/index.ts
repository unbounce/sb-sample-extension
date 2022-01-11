import { registerControl, registerComponent, registerSection } from 'config/utils/register-methods';
import { Template } from './hello-world-section';
import { Component } from './hello-world';
import { Control } from './control';

/**
 * Feel free to register whatever you need to export.
 * IMPORTANT: Registration ordering is important.
 */
registerControl(Control);
registerComponent(Component)
registerSection(Template);
