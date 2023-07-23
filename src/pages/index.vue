<!-- @format -->
<template>
  <div class="q-pa-md">
    <q-card flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" width="80%" />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar />
        <q-item-section>
          <q-skeleton height="50px" class="mb-2" />
          <q-skeleton height="50px" class="mb-2" />
          <q-skeleton height="50px" />
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>
