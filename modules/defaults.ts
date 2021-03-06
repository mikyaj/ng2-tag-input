import { Observable } from 'rxjs/Observable';
import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

import { 
    SECONDARY_PLACEHOLDER,
    PLACEHOLDER
 } from './core/constants';

import { TagInputDropdown } from './components/dropdown/tag-input-dropdown.component';
import { TagModel } from './core';

export interface TagInputOptions {
    separatorKeys: string[],
    separatorKeyCodes: number[],
    maxItems: number,
    placeholder: string,
    secondaryPlaceholder: string,
    validators: ValidatorFn[],
    asyncValidators: AsyncValidatorFn[],
    onlyFromAutocomplete: boolean,
    errorMessages: { [key: string]: string; },
    theme: string,
    onTextChangeDebounce: number,
    inputId: string,
    inputClass: string,
    clearOnBlur: boolean,
    hideForm: boolean,
    addOnBlur: boolean,
    addOnPaste: boolean,
    pasteSplitPattern: string,
    blinkIfDupe: boolean,
    removable: boolean,
    editable: boolean,
    allowDupes: boolean,
    modelAsStrings: boolean,
    trimTags: boolean,
    ripple: boolean,
    tabIndex: string,
    disabled: boolean,
    dragZone: string,
    onRemoving: () => Observable<TagModel>,
    onAdding: () => Observable<TagModel>,
    displayBy: string,
    identifyBy: string
}

export interface TagInputDropdownOptions {
    displayBy: string,
    identifyBy: string,
    appendToBody: boolean,
    offset: string,
    focusFirstElement: boolean,
    showDropdownIfEmpty: boolean,
    minimumTextLength: number,
    limitItemsTo: number,
    matchingFn: (value: string, target: TagModel) => boolean;
}

export const defaults = {
    tagInput: <TagInputOptions>{
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: undefined,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: undefined,
        inputClass: undefined,
        clearOnBlur: undefined,
        hideForm: undefined,
        addOnBlur: undefined,
        addOnPaste: undefined,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: undefined,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: undefined,
        disabled: false,
        dragZone: undefined,
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value'
    },
    dropdown: <TagInputDropdownOptions>{
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: undefined,
        matchingFn: function(this: TagInputDropdown, value: string, target: TagModel): boolean {
            const targetValue = target[this.displayBy].toString();

            return targetValue && targetValue
                .toLowerCase()
                .indexOf(value.toLowerCase()) >= 0;
        }
    }
};
