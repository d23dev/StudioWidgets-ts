interface CollapsibleTitledSection {
	GetSectionFrame(): Frame;
	GetContentsFrame(): Frame;
	SetCollapsedState(collapsed: boolean): void;
}
declare const CollapsibleTitledSection: {
	new (
		nameSuffix: string | number,
		titleText: string,
		autoScalingList?: boolean,
		minimizable?: boolean,
		minimizedByDefault?: boolean,
	): CollapsibleTitledSection;
};

interface CustomTextButton {
	GetButton(): ImageButton;
}
declare const CustomTextButton: {
	new (buttonName: string, labelText: string): CustomTextButton;
};

interface ImageButtonWithText {
	GetButton(): ImageButton;
	SetSelected(selected: boolean): void;
	GetSelected(): boolean;
}
declare const ImageButtonWithText: {
	new (
		name: string,
		icon: string | undefined,
		text: string,
		buttonSize: UDim2,
		imageSize: UDim2,
		imagePos: UDim2,
		textSize: UDim2,
		textPos: UDim2,
	): ImageButtonWithText;
};

interface LabeledCheckbox {
	UseSmallSize(): void;
	GetFrame(): Frame;
	GetValue(): boolean;
	GetLabel(): TextLabel;
	GetButton(): ImageButton;
	SetValueChangedFunction(vcf: (value: boolean) => unknown): void;
	SetDisabled(newDisabled: boolean): void;
	UpdateFontColors(): void;
	DisableWithOverrideValue(overrideValue: boolean): void;
	GetDisabled(): boolean;
	SetValue(newValue: boolean): void;
}
declare const LabeledCheckbox: {
	new (nameSuffix: string | number, labelText: string, initValue?: boolean, initDisabled?: boolean): LabeledCheckbox;
};

interface LabeledMultiChoice {
	/**
	 * @param selectedIndex Lua index, one-based.
	 */
	SetSelectedIndex(selectedIndex: number): void;
	/**
	 * @returns Lua index, one-based.
	 */
	GetSelectedIndex(): number;
	SetValueChangedFunction(vcf: (value: number) => unknown): void;
	GetFrame(): Frame;
}
declare const LabeledMultiChoice: {
	/**
	 * @param initChoiceIndex Lua index, one-based.
	 */
	new (
		nameSuffix: string | number,
		labelText: string,
		choices: { Id: string; Text: string }[],
		initChoiceIndex?: number,
	): LabeledMultiChoice;
};

interface LabeledRadioButton extends LabeledCheckbox {}
declare const LabeledRadioButton: {
	new (nameSuffix: string | number, labelText: string): LabeledRadioButton;
};

interface LabeledSlider {
	SetValueChangedFunction(vcf: (value: number) => unknown): void;
	GetFrame(): Frame;
	SetValue(newValue: number): void;
	GetValue(): number;
}
declare const LabeledSlider: {
	/**
	 * @param sliderIntervals Defaults to 100.
	 * @param defaultValue Defaults to 1.
	 */
	new (
		nameSuffix: string | number,
		labelText: string,
		sliderIntervals?: number,
		defaultValue?: number,
	): LabeledSlider;
};

interface LabeledTextInput {
	SetValueChangedFunction(vcf: (value: number) => unknown): void;
	GetFrame(): Frame;
	GetValue(): string;
	GetMaxGraphemes(): number;
	SetMaxGraphemes(newValue: number): void;
	SetValue(newValue: string): void;
}
declare const LabeledTextInput: {
	new (nameSuffix: string | number, labelText: string, defaultValue?: string): LabeledTextInput;
};

interface StatefulImageButton {
	SetSelected(selected: boolean): void;
	GetSelected(): boolean;
	GetButton(): ImageButton;
}
declare const StatefulImageButton: {
	new (buttonName: string, imageAsset: string, buttonSize: UDim2): StatefulImageButton;
};

interface VerticallyScalingListFrame {
	AddBottomPadding(): void;
	GetFrame(): Frame;
	AddChild(childFrame: GuiObject): void;
	SetCallbackOnResize(callback: () => unknown): void;
}
declare const VerticallyScalingListFrame: {
	new (nameSuffix: string | number): VerticallyScalingListFrame;
};

interface VerticalScrollingFrame {
	GetContentsFrame(): ScrollingFrame;
	GetSectionFrame(): Frame;
}
declare const VerticalScrollingFrame: {
	new (suffix: string | number): VerticalScrollingFrame;
};

export {
	CollapsibleTitledSection,
	CustomTextButton,
	ImageButtonWithText,
	LabeledCheckbox,
	LabeledMultiChoice,
	LabeledRadioButton,
	LabeledSlider,
	LabeledTextInput,
	StatefulImageButton,
	VerticallyScalingListFrame,
	VerticalScrollingFrame,
};
