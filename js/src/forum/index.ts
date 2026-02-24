import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import MoreDiscussions from './components/MoreDiscussions';
import insertAfter from './helpers/insertAfter';

app.initializers.add('datlechin/flarum-more-discussions', () => {
  extend('flarum/forum/components/PostStream', 'oncreate', function () {
    const postStream: HTMLElement | null = document.querySelector('.PostStream');
    if (!postStream) return;

    const moreDiscussionRoot = document.createElement('div');
    moreDiscussionRoot.classList.add('MoreDiscussions');
    m.mount(insertAfter(moreDiscussionRoot, postStream), MoreDiscussions);
  });
});
