local class = script.Parent.class
local classNames = {
    "CollapsibleTitledSection",
    "CustomTextButton",
    "ImageButtonWithText",
    "LabeledCheckbox",
    "LabeledMultiChoice",
    "LabeledRadioButton",
    "LabeledSlider",
    "LabeledTextInput",
    "StatefulImageButton",
    "VerticallyScalingListFrame",
    "VerticalScrollingFrame",
}

local final = {}
for _, className in classNames do
    final[className] = require(class[className])
end
return final